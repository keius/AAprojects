class ApplicationController < ActionController::Base
  helper_method :current_user, :login_user!, :logged_in?
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login_user!(user)
    session[:session_token] = user.reset_user_token!
  end

  def logged_in?
    !current_user.nil?
  end

  def require_user!
    redirect_to new_session_url if current_user.nil?
  end

end
