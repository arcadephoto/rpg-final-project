# Generated by Django 3.1.7 on 2021-03-27 14:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('weapons', '0001_initial'),
        ('characters', '0017_character_silver'),
    ]

    operations = [
        migrations.AlterField(
            model_name='character',
            name='equippedWeapon',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='weapons.weapon'),
        ),
    ]