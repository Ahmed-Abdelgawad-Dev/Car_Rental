from cgi import print_exception
from django.db import models
from django.utils.text import format_lazy as _

class Car(models.Model):
    brand = models.CharField(max_length=255)
    model = models.CharField(max_length=255)
    year = models.CharField(max_length=255)
    price = models.PositiveBigIntegerField()
    color = models.CharField(max_length=255)
    image = models.ImageField(_("image"), upload_to="images", height_field=None, width_field=None, max_length=None)
