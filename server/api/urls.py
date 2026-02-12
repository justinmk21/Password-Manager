from django.urls import include, path
from .views import AddPassword, UserPasswordListView, PasswordDeleteView, PasswordUpdateView

urlpatterns = [
    path('add-password/', AddPassword.as_view(), name="add-password"),
    path('passwords/', UserPasswordListView.as_view(), name='passwords'),
    path('delete-password/<int:pk>/', PasswordDeleteView.as_view(), name='delete-password'),
    path('passwords/update/<int:pk>/', PasswordUpdateView.as_view(), name="update-password")
]