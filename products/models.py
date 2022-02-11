""" import models """
from django.db import models
from datetime import datetime


class Category(models.Model):
    """ Category models """

    class Meta:
        """ Metadata """
        verbose_name_plural = 'Categories'

    name = models.CharField(max_length=254)
    friendly_name = models.CharField(max_length=254, null=True, blank=True)

    def __str__(self):
        return self.name

    def get_friendly_name(self):
        """ get_friendly_name function """
        return self.friendly_name


class Product(models.Model):

    """ Product model """

    category = models.ForeignKey(
        'Category', null=True, blank=True, on_delete=models.SET_NULL)
    sku = models.CharField(max_length=254, null=True, blank=True)
    name = models.CharField(max_length=254)
    gender = models.CharField(max_length=254)
    description = models.TextField()
    has_sizes = models.BooleanField(
        default=False, null=True, blank=True)
    """ Custom model field """
    shoe_sizes = models.BooleanField(
        default=False, null=True, blank=True)
    price = models.DecimalField(
        max_digits=6, decimal_places=2)
    rating = models.DecimalField(
        max_digits=6, decimal_places=2, null=True, blank=True)
    image_url = models.URLField(max_length=1024, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)

    def __str__(self):
        return self.name


class Comment(models.Model):

    """ Custom model that allows users to
    leave reviews on products  """

    product = models.ForeignKey(
        Product, related_name="comments", on_delete=models.CASCADE)
    comment_name = models.CharField(max_length=254)
    comment_title = models.CharField(max_length=254)
    comment_body = models.TextField()
    rating = models.DecimalField(
        max_digits=6, decimal_places=2, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '%s - %s' % (self.product.name, self.comment_name)
