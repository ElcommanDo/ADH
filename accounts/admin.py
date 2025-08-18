from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser


class CustomUserAdmin(UserAdmin):
    # الحقول اللي هتظهر في جدول الـ admin list
    list_display = ("student_mobile", "first_name", "last_name", "role", "is_active", "is_staff")
    list_filter = ("role", "is_active", "is_staff", "is_superuser")

    # الحقول اللي ممكن تعمل بحث بيها
    search_fields = ("student_mobile", "first_name", "last_name", "parent_mobile", "city")

    ordering = ("student_mobile",)

    # تقسيم الحقول في صفحة التفاصيل
    fieldsets = (
        (None, {"fields": ("student_mobile", "password")}),
        ("Personal Info", {"fields": ("first_name", "last_name", "age", "parent_mobile", "address", "city", "job_title", "image")}),
        ("Roles & Permissions", {"fields": ("role", "is_active", "is_staff", "is_superuser", "groups", "user_permissions")}),
        ("Important Dates", {"fields": ("last_login", "date_joined")}),
    )

    # الحقول عند الإضافة (لما تيجي تعمل add user جديد)
    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": ("student_mobile", "first_name", "last_name", "role", "job_title", "image", "password1", "password2", "is_active", "is_staff"),
        }),
    )


admin.site.register(CustomUser, CustomUserAdmin)
from django.contrib import admin

# Register your models here.
