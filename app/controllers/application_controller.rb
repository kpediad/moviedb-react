class ApplicationController < ActionController::API
  include ActionController::MimeResponds

  private

  def validate_movie
    if params[:movie_id] then
      @movie = Movie.find_by(id: params[:movie_id])
    else
      @movie = Movie.find_by(id: params[:id])
    end
    if !@movie then
      flash.alert = "Requested movie does not exist!"
      redirect_to movies_path
    end
  end

end
