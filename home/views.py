from django.shortcuts import render
from profile_detail.models import Profile

def home(request):
    profile = None
    if request.user.is_authenticated:
        profile = Profile.objects.filter(user=request.user).first()
    return render(request, 'home/home.html', context={'profile': profile})
