class MoviesController < ApplicationController

  before_action :validate_movie, only: [:edit, :update, :show, :destroy]

  def create
    @movie = Movie.new(movie_params)
    if @movie.save then
      flash.notice = "New movie was created successfully!"
      redirect_to movies_path
    else
      flash.now.alert = "#{@movie.error_msg}"
      if @movie.reviews.first then
        @reviews = @movie.reviews
      else
        @reviews = @movie.reviews.build
      end
      render :new
    end
  end

  def update
    if @movie.update(movie_params) then
      flash.notice = "Movie details were updated successfully!"
      redirect_to movie_path(@movie)
    else
      flash.now.alert = "#{@movie.error_msg}"
      @reviews = @movie.reviews
      @edit = true
      render :new
    end
  end

  def index
    @movies = Movie.all
    respond_to do |format|
      format.html {render :show}
      format.json {render json: @movies, include: '**', status: 200}
    end
  end

  # We will not need a show action or route but we keep it here to help up
  # adapt the required actions/routes to use json format

  def show
    respond_to do |format|
      format.html {render :show}
      format.json {render json: @movie, include: '**', status: 200}
    end
  end

  def destroy
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :release_year, :synopsis, :score)
  end

end
