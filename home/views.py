from django.shortcuts import render
from profile_detail.models import Profile
def home(request):
    profile = Profile.objects.all()
    return render(request, 'home/home.html', {'profile': profile})
