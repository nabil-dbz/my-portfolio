// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Iterator;

public final class FindMeetingQuery {
  public Collection<TimeRange> query(Collection<Event> events, MeetingRequest request) {
    Collection<TimeRange> collection = new ArrayList<TimeRange>();
    collection.add(TimeRange.WHOLE_DAY);
    return collection;
  }
  /**
   * Return a time range that overlaps with the event in which at least one of the attendees is present.
   *
   * @param event The event in which should overlap with the time range.
   * @param lTimeRanges The list of time ranges in which we look for the time range to be returned.
   * @param request The meeting request.
   * @return a time range if found, otherwise, null.
   */
  private TimeRange getTimeRangeWithEvent(Event event, Collection<TimeRange> lTimeRanges, MeetingRequest request) {
    for (TimeRange timeRange: lTimeRanges) {
      if (timeRange.overlaps(event.getWhen()) && areAttendeesInEvent(request.getAttendees(), event)) {
        return timeRange;
      }
    }
    return null;
  }
  /**
   * Check if one of the request meeting attendees is attending an event.
   *
   * @param attendees The list of attendees to be invited to the event.
   * @param event The event in which we want to check the list of attendees.
   * @return true if one or more of the attendees is in the list of mandatory attendees of the event
   */
  private boolean areAttendeesInEvent(Collection<String> attendees, Event event) {
    for (String attendee: attendees) {
      if (event.getAttendees().contains(attendee)) {
        return true;
      }
    }
    return false;
  }
}
