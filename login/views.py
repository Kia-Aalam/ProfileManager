from django.shortcuts import render

def signin(request):
    return render(request, 'login/signin.html')

def signup(request):
    return render(request, 'login/signup.html')
