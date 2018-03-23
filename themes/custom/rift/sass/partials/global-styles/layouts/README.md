# Layout Partials

These layout partials should only be the ones that will be used in your global
styles library for use on all pages of the site.

Layout partials should actually be fairly sparse throughout a project. The
idea behind a "layout" file is that it manages the relationship(s) of two or
more components on a given page. Often, this can be thought of as a "Page
Layout" file although that isn't always the case.

Layout files should contain absolutely no non-box model styling.

For example:

## An "Event" layout.

In this example, assume that "next-event" and "event-calendar" are two separate
components, each defined in their respective partials inside the
`scss/components` directory. The only thing we're doing here is figuring out how
they relate to each other.

```html
<section class="next-event">
  <h2 class="next-event__title">Secret Meetings</h2>
  <h3 class="next-event__day">Monday</h3>
</section>
<section class="event-calendar">
  <ul class="event-calendar__list">
    <li class="event-calendar__item">Armageddon</li>
    <li class="event-calendar__item">Weekly Front-end Meeting</li>
    <li class="event-calendar__item">Tech sync</li>
  </ul>
</section>
```

```css
.next-event {
  @include span(4 of 12);
  margin-bottom: 30px;
}

.event-calendar {
  @include span(8 of 12);
}
```


## Typical contents

Filename              | Purpose
--------------------- | ---------------------------------------------
`_l-blog.scss`        | Manages the placement of various components on a blog
`_l-event.scss`       | Manages the placement of various components on an event
