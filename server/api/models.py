from django.db import models
from django.conf import settings
from .password_manager import PasswordManager

# Create your models here.
class PasswordEntry(models.Model):
    """Model to store user passwords."""
    service_name = models.CharField(max_length=100)
    password = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )

    
    def __str__(self):
        """String representation of the password."""
        return f"Password for {self.service_name} ({self.user})"