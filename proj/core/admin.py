from django.contrib import admin
from django.contrib.admin import ModelAdmin
from .models import Car


class CarAdmin(ModelAdmin):
    list_display = ['model', 'id', 'year', 'price', 'created', 'updated']
    list_filter = ['model', 'year', 'price']


admin.site.register(Car, CarAdmin)
