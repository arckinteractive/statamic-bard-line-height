<?php

namespace Arckinteractive\StatamicBardLineHeight;

use Illuminate\Support\Facades\Artisan;
use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;
use Statamic\Statamic;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__.'/../dist/js/arckinteractive-bard-line-height.js',
    ];

    protected $stylesheets = [
        __DIR__.'/../dist/css/arckinteractive-bard-line-height.css'
    ];

    protected $publishables = [

    ];

    public function boot()
    {
        parent::boot();
        Augmentor::addExtension('ArckLineHeight', new ArckLineHeight());

        $this->publishes([
            __DIR__ . '/../public' => public_path('vendor/arckinteractive-bard-line-height'),
        ], 'arckinteractive-bard-line-height');

        Statamic::afterInstalled(function() {
            Artisan::call('vendor:publish --tag=arckinteractive-bard-line-height');
        });
    }
}
