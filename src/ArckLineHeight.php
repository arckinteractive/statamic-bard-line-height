<?php

namespace Arckinteractive\StatamicBardLineHeight;

use ProseMirrorToHtml\Marks\Mark;

class ArckLineHeight extends Mark
{
    protected $markType = 'ArckLineHeight';
    protected $tagName = 'span';

    public function matching(): bool
    {
        return $this->mark->type === $this->markType;
    }

    public function tag(): ?array
    {
        $num = ((int) str_replace('arck-line-height-', '', $this->mark->attrs->key)) / 100;
        return [
            [
                'tag'   => 'span',
                'attrs' => [
                    'class' => 'arck-line-height',
                    'style' => 'line-height: ' . $num . ';'
                ],
            ],
        ];
    }
}