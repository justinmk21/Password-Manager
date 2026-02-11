from cryptography.fernet import Fernet
import os

KEY_FILE = os.path.join(os.path.dirname(__file__), 'secret.key')

if os.path.exists(KEY_FILE):
    with open(KEY_FILE, 'rb') as key_file:
        KEY = key_file.read()
else:
    KEY = Fernet.generate_key()
    with open(KEY_FILE, 'wb') as key_file:
        key_file.write(KEY)

cipher_suite = Fernet(KEY)

def encrypt_password(password: str) -> str:
    """Encrypt the password using Fernet symmetric encryption."""
    return cipher_suite.encrypt(password.encode()).decode()

def decrypt_password(token: str) -> str:
    """Decrypt the pasword using Fernet symmertric encryption."""
    return cipher_suite.decrypt(token.encode()).decode()