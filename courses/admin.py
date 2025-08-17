from django.contrib import admin
from django.utils.html import format_html
from .models import Course, Category


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("cover_preview", "title")
    list_filter = ( "created_at", )
    search_fields = ("title", )
    ordering = ("-created_at", )
    readonly_fields = ("created_at", "updated_at", "cover_preview")

   
    def cover_preview(self, obj):
        if obj.cover:
            return format_html('<img src="{}" width="120" style="border-radius:8px;" />', obj.cover.url)
        return "-"
    cover_preview.short_description = "Cover Preview"


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ("cover_preview", "title", "is_free", "price", "created_at", "updated_at",)
    list_filter = ("is_free", "created_at")
    search_fields = ("title", "description")
    ordering = ("-created_at", )
    readonly_fields = ("created_at", "updated_at", "cover_preview")

    fieldsets = (
        ("Course Info", {
            "fields": ("title", "description", "cover", "hours", "category", "cover_preview")
        }),
        ("Pricing", {
            "fields": ("is_free", "price"),
        }),
        ("Timestamps", {
            "fields": ("created_at", "updated_at"),
        }),
    )

    def cover_preview(self, obj):
        if obj.cover:
            return format_html('<img src="{}" width="120" style="border-radius:8px;" />', obj.cover.url)
        return "-"
    cover_preview.short_description = "Cover Preview"

