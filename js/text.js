(function() {
  $(function() {
    var $title, delay, i, j, new_title, ref, t, title;
    
    // Vars
    $title = $('h1');
    title = $title.text();
    new_title = '';
    delay = 24;
    for (i = j = 0, ref = title.length; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
      t = title[i] === ' ' ? new_title + ' ' : new_title + '<span class="show" style="animation-delay: ' + (i * delay) + 'ms">' + title[i] + '</span>';
      $title.html(t);
      new_title = $title.html();
    }
    return $title.addClass('focus');
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxDQUFBLENBQUUsUUFBQSxDQUFBLENBQUE7QUFHQSxRQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxTQUFBLEVBQUEsR0FBQSxFQUFBLENBQUEsRUFBQSxLQUFBOzs7SUFBQSxNQUFBLEdBQVMsQ0FBQSxDQUFFLElBQUY7SUFDVCxLQUFBLEdBQVEsTUFBTSxDQUFDLElBQVAsQ0FBQTtJQUNSLFNBQUEsR0FBWTtJQUNaLEtBQUEsR0FBUTtJQUVSLEtBQVMsdUZBQVQ7TUFDRSxDQUFBLEdBQU8sS0FBTSxDQUFBLENBQUEsQ0FBTixLQUFZLEdBQWYsR0FBeUIsU0FBQSxHQUFZLEdBQXJDLEdBQWdELFNBQUEsR0FBWSw2Q0FBWixHQUE0RCxDQUFDLENBQUEsR0FBSSxLQUFMLENBQTVELEdBQTBFLE1BQTFFLEdBQW1GLEtBQU0sQ0FBQSxDQUFBLENBQXpGLEdBQThGO01BQ2xKLE1BQU0sQ0FBQyxJQUFQLENBQVksQ0FBWjtNQUNBLFNBQUEsR0FBWSxNQUFNLENBQUMsSUFBUCxDQUFBO0lBSGQ7V0FLQSxNQUFNLENBQUMsUUFBUCxDQUFnQixPQUFoQjtFQWJBLENBQUY7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIiQgLT5cbiAgXG4gICMgVmFyc1xuICAkdGl0bGUgPSAkKCdoMScpXG4gIHRpdGxlID0gJHRpdGxlLnRleHQoKVxuICBuZXdfdGl0bGUgPSAnJ1xuICBkZWxheSA9IDI0XG4gIFxuICBmb3IgaSBpbiBbMC4uLnRpdGxlLmxlbmd0aF1cbiAgICB0ID0gaWYgdGl0bGVbaV0gaXMgJyAnIHRoZW4gKG5ld190aXRsZSArICcgJykgZWxzZSAobmV3X3RpdGxlICsgJzxzcGFuIGNsYXNzPVwic2hvd1wiIHN0eWxlPVwiYW5pbWF0aW9uLWRlbGF5OiAnICsgKGkgKiBkZWxheSkgKyAnbXNcIj4nICsgdGl0bGVbaV0gKyAnPC9zcGFuPicpXG4gICAgJHRpdGxlLmh0bWwodClcbiAgICBuZXdfdGl0bGUgPSAkdGl0bGUuaHRtbCgpXG5cbiAgJHRpdGxlLmFkZENsYXNzKCdmb2N1cycpIl19
//# sourceURL=coffeescript