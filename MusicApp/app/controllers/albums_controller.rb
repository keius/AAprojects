class AlbumsController < ApplicationController
  def create
    @album = Album.new(album_params)
    if @album.save
      redirect_to album_url
    else
      flash.now[:errors] = @album.errors.full_messages
      render :new
    end
  end

  def edit
    @album = Album.find(params[:id])
    render :edit
  end

  def show
    @album = Album.find(params[:id])
    render :show
  end

  def new
    @album = Album.new
    render :new
  end

  def update
  end

  def destroy
  end

  private
  def album_params
    params.require(:album).require(:name, :band_id, :year, :live)
  end
end
