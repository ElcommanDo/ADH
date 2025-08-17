from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager


class CustomUserManager(BaseUserManager):
    def create_user(self, student_mobile, password=None, **extra_fields):
        """
        إنشاء مستخدم عادي
        """
        if not student_mobile:
            raise ValueError("يجب إدخال رقم الموبايل للطالب")
        
        student_mobile = self.normalize_email(student_mobile)  # ممكن تشيلها لو مش عايز normalization
        user = self.model(student_mobile=student_mobile, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, student_mobile, password=None, **extra_fields):
        """
        إنشاء مستخدم أدمن (superuser)
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('role', 'admin')

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser لازم يكون is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser لازم يكون is_superuser=True.')

        return self.create_user(student_mobile, password, **extra_fields)


class CustomUser(AbstractUser):
    ROLE_CHOICES = (
        ('student', 'Student'),
        ('admin', 'Admin'),
        ('instructor', 'Instructor'),
    )

    username = None   # نلغي الـ username الافتراضي
    student_mobile = models.CharField(max_length=15, unique=True)

    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='student')
    parent_mobile = models.CharField(max_length=15, blank=True, null=True)
    age = models.IntegerField(blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    city = models.CharField(max_length=50, blank=True, null=True)

    USERNAME_FIELD = "student_mobile"   # login بالـ student_mobile
    REQUIRED_FIELDS = ["first_name", "last_name"]

    objects = CustomUserManager()   # نربط اليوزر مانجر

    def __str__(self):
        return f"{self.student_mobile} - {self.role}"
