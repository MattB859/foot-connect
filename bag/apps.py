"""
Python imported modules
"""
from django.apps import AppConfig


class BagConfig(AppConfig):
    """
    Bag config
    """
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'bag'
