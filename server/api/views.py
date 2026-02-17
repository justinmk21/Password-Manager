from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, PasswordEntrySerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from cryptography.fernet import Fernet
from .models import PasswordEntry
from .password_manager import PasswordManager
from .encryption import encrypt_password, decrypt_password, KEY
from rest_framework.response import Response
from rest_framework import status, filters
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken


FERNET_KEY = KEY
cipher_suite = Fernet(FERNET_KEY)

# Create your views here.
class CreateUserView(generics.CreateAPIView):
    """a view to create user account."""
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class AddPassword(generics.CreateAPIView):
    """Add a password."""
    serializer_class = PasswordEntrySerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        """create password"""
        raw_password = self.request.data.get('password')
        encrypted_password = encrypt_password(raw_password)
        serializer.save(user=self.request.user, password=encrypted_password)

class UserPasswordListView(generics.ListAPIView):
    """Retrieve created passwords."""
    serializer_class = PasswordEntrySerializer
    permission_classes = [IsAuthenticated]

    # Add the search filter
    filter_backends = [filters.SearchFilter]

    # searchable fileds
    search_fields = ["service_name"]

    def get_queryset(self):
        """Enquire about passwords."""
        return PasswordEntry.objects.filter(user=self.request.user)
    
class PasswordDeleteView(generics.DestroyAPIView):
    """A class to delete passwords."""
    serializer_class = PasswordEntrySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Filter item to be deleted."""
        user = self.request.user
        return PasswordEntry.objects.filter(user=user)
    
# Update existing password
class PasswordUpdateView(generics.UpdateAPIView):
    """A class to update existing passwords."""
    serializer_class = PasswordEntrySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Ensures users can only update their own passwords
        return PasswordEntry.objects.filter(user=self.request.user)
    
    def perform_update(self, serializers):
        # Check if a new password was provided in the request
        raw_password = self.request.data.get('password')

        if raw_password:
            # Re-encrypt the new password before saving
            encrypt_password = encrypt_password(raw_password)
            serializers.save(password=encrypt_password)
        else:
            # If they only updated the 'service_name', save normally
            serializers.save()

class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=204)
        except Exception as e:
            return Response(status=400)

class CurrentUserView(APIView):
    "Get acces to user details"
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({
            "username": request.user.username,
        })