class ApplicationController < ActionController::API

  private

  def validate_movie
    @movie = Movie.find_by(id: params[:id])
    if !@movie then
      render json: { message: "Movie not found!" }, status: :not_found
    end
  end

end
