<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => fake()->sentence(6, true),
            'description' => fake()->paragraph(2, true),
            'category' => fake()->sentence(1, true),
            'content' => fake()->paragraph(3, true),
            'author' => fake()->email()
        ];
    }

}
