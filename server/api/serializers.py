from rest_framework import serializers
from django.contrib.auth.models import User
from .models import PasswordEntry
from .encryption import decrypt_password

class UserSerializer(serializers.ModelSerializer):
    """User"""
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}
    def create(self, validated_data):
        """a user object for creating account."""
        user = User.objects.create_user(**validated_data)
        return user
    
class PasswordEntrySerializer(serializers.ModelSerializer):
    """Decrypted and retrieve passwords."""
    decrypted_password = serializers.SerializerMethodField()
    class Meta:
        model = PasswordEntry
        fields = ["id", "service_name", "password", "decrypted_password", "created_at"]
        read_only_fields = ["id", "created_at"]

    def get_decrypted_password(self, obj):
        """Get decrypted passwords."""
        return decrypt_password(obj.password)