from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def frontend(request):
    return render(request, 'core/frontend.html')

def cars(request):
    return render(request, 'core/sections/cars.html')
