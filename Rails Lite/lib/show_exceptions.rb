require 'erb'

class ShowExceptions
  attr_reader :app

  def initialize(app)
    @app = app
  end

  def call(env)
    app.call(env)
  rescue Exception => e
    render_exception(e)
  end

  private

  def render_exception(e)
    dir = File.dirname(__FILE__)
    fname = File.join(dirname, "template", "rescue.html.erb")
    template = File.read(fname)
    body = ERB.new(template).result(binding)

    ['500', {'Content-Type' => 'text/html'}, body]
  end

end
