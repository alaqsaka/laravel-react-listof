<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostCollection;
use Inertia\Inertia;
use App\Models\Post;
use Illuminate\Http\Request;

use function Termwind\render;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Ngambil data posts dari database
        $posts = new PostCollection(Post::orderBy('id', 'desc')->paginate(8));

        return Inertia::render('Homepage', ['title' => 'ListOf Home', 'description' => 'Welcome to ListOf', 'posts' => $posts]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $post = new Post();
        $post->title = $request->title;
        $post->description = $request->description;
        $post->category = $request->category;
        $post->content = $request->content;
        $post->author = auth()->user()->email;
        $post->save();
        return redirect()->back()->with('message', 'Success create new list!');
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        $postsCreatedByUser = $post::where('author', auth()->user()->email)->get();

        return Inertia::render('Dashboard', ['postsCreatedByUser' => $postsCreatedByUser]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post, Request $request)
    {
        return Inertia::render('EditPost', [
            'myPost' => $post->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        Post::where('id', $request->id)->update([
            'title' => $request->title,
            'description' => $request->description,
            'category' => $request->category, 
            'content' => $request->content ]);
        return to_route('dashboard')->with('message', 'Success update list');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        //
    }
}
