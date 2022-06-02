<?php

namespace Arckinteractive\StatamicBardLineHeight;

use Tiptap\Core\Mark;
use Tiptap\Utils\HTML;

class ArckLineHeight extends Mark
{
    public static $name = 'ArckLineHeight';

    public function renderHTML($mark, $HTMLAttributes = [])
    {
        $num = ((int) str_replace('arck-line-height-', '', $mark->attrs->key)) / 100;

        return [
            'span',
            HTML::mergeAttributes(
                [
                    'class' => 'arck-line-height',
                    'style' => 'line-height: ' . $num . ';'
                ],
                $HTMLAttributes,
            ),
            0
        ];
    }
}
