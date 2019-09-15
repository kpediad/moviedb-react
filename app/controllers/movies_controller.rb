class MoviesController < ApplicationController

  before_action :validate_movie, only: [:update, :destroy]

  def create
    @movie = Movie.new(movie_params)
    if @movie.save then
      render json: @movie, status: :created
    else
      render json: { message: @movie.error_msg }, status: :unprocessable_entity
    end
  end

  def update
    if @movie.update(movie_params) then
      render json: @movie, status: :ok
    else
      render json: { message: @movie.error_msg }, status: :unprocessable_entity
    end
  end

  def index
    @movies = Movie.all
    render json: @movies, status: :ok
  end

  def destroy
    if @movie.delete then
      render json: @movie, status: :ok
    else
      render json: { message: @movie.error_msg }, status: :unprocessable_entity
    end
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :release_year, :synopsis, :score)
  end

end
