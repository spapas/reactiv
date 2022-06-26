from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import HttpRequest, HttpResponse
from . import templates

class HomeTemplateView(TemplateView):
    template_name = "home.html"


def home_page(request: HttpRequest) -> HttpResponse:
    stars = 1992

    return templates.HomePage(stars=stars).render(request)