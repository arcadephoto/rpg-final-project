# Generated by Django 3.1.7 on 2021-03-29 22:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0003_item_isusable'),
        ('characters', '0026_auto_20210329_2203'),
    ]

    operations = [
        migrations.AlterField(
            model_name='character',
            name='equippedWeapon',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='items.item'),
        ),
    ]