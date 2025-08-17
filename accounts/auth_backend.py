# app_name/auth_backends.py
from django.contrib.auth.backends import ModelBackend
from .models import CustomUser

class StudentMobileBackend(ModelBackend):
    def authenticate(self, request, student_mobile=None, password=None, **kwargs):
        try:
            user = CustomUser.objects.get(student_mobile=student_mobile)
            if user.check_password(password):
                return user
        except CustomUser.DoesNotExist:
            return None
