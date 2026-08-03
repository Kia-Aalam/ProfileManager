from django.shortcuts import render, redirect
from profile_detail.models import Profile
from django.contrib.auth.decorators import login_required

@login_required
def profile(request):
    profile, created = Profile.objects.get_or_create(user=request.user)

    if request.method == "POST":
        request.user.username = request.POST.get("username", request.user.username)
        request.user.save()

        profile.specialty = request.POST.get("specialty", "")
        profile.email = request.POST.get("email", "")
        profile.location = request.POST.get("location", "")
        profile.bio = request.POST.get("bio", "")

        if request.FILES.get("image"):
            profile.image = request.FILES.get("image")

        profile.save()

        return redirect("profile")

    return render(request, "profile_detail/profile.html", {"profile": profile})
