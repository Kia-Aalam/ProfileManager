from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    specialty = models.CharField(max_length=100)
    email = models.EmailField()
    location = models.CharField(max_length=100)
    bio = models.TextField()
