<?php

namespace Arckinteractive\StatamicBardLineHeight;

use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;

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
        Augmentor::addExtension('ArckLineHeight', new ArckLineHeight);

        $this->publishes([
            __DIR__ . '/../public' => public_path('vendor/arckinteractive-bard-line-height'),
        ], 'arckinteractive-bard-line-height');
    }
}
