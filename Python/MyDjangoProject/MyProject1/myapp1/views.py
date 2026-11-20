from django.shortcuts import render

def home(request):
    return render(request, "home.html", {"name":"john doe"})

def about(request):
    return render(request, "about.html", {"name":"john doe", "age":45})

def address(request):
    return render(request, "address.html", {"addy":"123 Web Street, Suite 400, San Francisco, CA 94107"})