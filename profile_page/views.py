from django.shortcuts import render

def profile(request):
    return render(request, 'profile_page/profile.html')
