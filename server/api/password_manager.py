from .encryption import encrypt_password, decrypt_password

class BasePasswordManager:
    """Base class for password management."""

    def __init__(self, old_passwords):
        self.old_passwords = old_passwords or []
    
    def get_password(self):
        """Retrieve the current password."""
        return self.old_passwords[-1] if self.old_passwords else None
    
    def is_correct(self, password):
        """Check if the password matches the current password."""
        current = self.get_password()
        return decrypt_password(current) == password if current else False
    

class PasswordManager(BasePasswordManager):
    """Class for getting the strength or level of the password of the password strength."""

    def get_level(self, password=None):
        """Get the strength level of the password."""
        from re import search
        pw = password if password else decrypt_password(self.get_password())

        if pw.isalpha() or pw.isdigit():
            return 0
        elif pw.isalnum():
            return 1
        elif search(r"[a-zA-Z]", pw) and search(r"[\d]", pw) and search(r"[\w]", pw):
            return 2
        return 0
    
    def set_password(self, new_password):
        """Set a password."""
        if len(new_password) < 6:
            return False, "Password too short."
        new_level = self.get_level(new_password)
        current_level = self.get_level() if self.old_passwords else -1

        if current_level < 2 and new_level > current_level:
            return True, "Password is strong enough."

        elif current_level == 2 and new_level == 2:
            return True, "Password is strong enough."
        else:
            return False, "Password must be stronger that the current one."