"""
Python imported modules
"""
from django.apps import AppConfig


class CheckoutConfig(AppConfig):
    """
    Checkout Class
    """
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'checkout'
