from django.urls import path
from . import views


urlpatterns = [
    path('', views.frontend),
    path('cars/', views.cars),
]
