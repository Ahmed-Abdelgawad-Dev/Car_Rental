from django.db import models
from django.utils.text import format_lazy as _

class Car(models.Model):
    brand = models.CharField(max_length=255)
    model = models.CharField(max_length=255)
    year = models.IntegerField(blank=True, null=True)
    price = models.PositiveBigIntegerField()
    image = models.ImageField(_("image"), upload_to="images", height_field=None, width_field=None, max_length=None)
    created = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    updated = models.DateTimeField(auto_now=True, blank=True, null=True)
    def __str__(self):
        return f"{self.brand} {self.model}"
