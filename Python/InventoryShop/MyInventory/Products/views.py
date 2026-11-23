from django.shortcuts import render,redirect
from .models import Product
from .forms import ProductForm

def home(request):
    data = {
        'name' : 'django',
        'age' : 45,
        'numbers' : [1,2,3,4,5]
    }
    return render(request, "home.html", data)

def about(request):
    return render(request, "about.html")

def contact(request):
    return render(request, "contact.html")

def add_product(request):
    if request.method == 'POST':
        form = ProductForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('product_list')  # Replace with your redirect URL name
        else:
            print("FORM ERRORS:", form.errors)  # Prints exact validation errors in terminal
    else:
        form = ProductForm()

    return render(request, 'add_products.html', {'form': form})

def product_list(request):
    products = Product.objects.all()
    return render(request, 'product_list.html', {'products': products})

