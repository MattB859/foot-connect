""" Import modules"""
from django.apps import AppConfig


class HomeConfig(AppConfig):
    """ Home page configuration"""
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'home'
