from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.home, name = 'home'),
    path('about/', views.about, name = 'about'),
    path('contact/', views.contact, name = 'contact'),
    path('products/', views.add_product, name = 'add_products'),
    path('product_list/', views.product_list, name = 'product_list')
]