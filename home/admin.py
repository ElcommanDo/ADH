from django.contrib import admin
from django.utils.html import format_html
from .models import Expert, StudnetsReview, New


@admin.register(Expert)
class ExpertAdmin(admin.ModelAdmin):
    list_display = ("name", "job_title", "created_at", "image_preview")
    search_fields = ("name", "job_title")
    readonly_fields = ("created_at", "updated_at", "image_preview")

    fieldsets = (
        ("Personal Info", {
            "fields": ("name", "job_title", "image", "image_preview")
        }),
        ("Social Links", {
            "fields": ("facebook_url", "instagram_url", "paintrest_url", "twitter_url"),
        }),
        ("Timestamps", {
            "fields": ("created_at", "updated_at"),
        }),
    )

    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="100" style="border-radius:8px;" />', obj.image.url)
        return "-"
    image_preview.short_description = "Preview"


@admin.register(StudnetsReview)
class StudnetsReviewAdmin(admin.ModelAdmin):
    list_display = ("name", "job_title", "created_at")
    search_fields = ("name", "job_title", "description")
    readonly_fields = ("created_at", "updated_at")

    fieldsets = (
        ("Review Info", {
            "fields": ("name", "job_title", "description", "image")
        }),
        ("Timestamps", {
            "fields": ("created_at", "updated_at"),
        }),
    )


@admin.register(New)
class NewAdmin(admin.ModelAdmin):
    list_display = ("title", "created_at", "image_preview")
    search_fields = ("title", "description")
    readonly_fields = ("created_at", "updated_at", "image_preview")

    fieldsets = (
        ("News Info", {
            "fields": ("title", "description", "image", "image_preview")
        }),
        ("Timestamps", {
            "fields": ("created_at", "updated_at"),
        }),
    )

    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="120" style="border-radius:8px;" />', obj.image.url)
        return "-"
    image_preview.short_description = "Preview"
