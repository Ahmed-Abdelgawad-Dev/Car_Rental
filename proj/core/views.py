from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def cars_list(request):
    return render(request, 'core/sections/cars.html')
