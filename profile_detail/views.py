from django.shortcuts import render

def profile(request):
    return render(request, 'profile_detail/profile.html')
