# Generated by Django 4.2.1 on 2023-06-23 22:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aplicant_employee_api', '0007_alter_seleccionados_faseaplicante'),
    ]

    operations = [
        migrations.AddField(
            model_name='aplicantes',
            name='imagenPerfil',
            field=models.TextField(default=''),
        ),
    ]