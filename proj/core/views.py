from django.shortcuts import render
from .models import Car
# Create your views here.
def cars_list(request):
    cars = Car.objects.all()[:10]
    return render(request, 'core/sections/cars.html', {'cars':cars})
