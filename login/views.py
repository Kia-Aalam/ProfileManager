from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
def signin(request):
    if request.user.is_authenticated == True:
        return redirect('home')

    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            return redirect('signin')

    return render(request, 'login/signin.html')

def signup(request):
    if request.user.is_authenticated == True:
        return redirect('home')

    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        confirmPassword = request.POST.get('confirmPassword')

        exist_username = User.objects.filter(username=username).exists()
        if not exist_username and password == confirmPassword:
            user = User.objects.create_user(username=username, password=password)
            user.save()
            login(request, user)
            return redirect('home')
        else:
            return redirect('signup')

    return render(request, 'login/signup.html')

def user_logout(request):
    logout(request)
    return redirect('home')