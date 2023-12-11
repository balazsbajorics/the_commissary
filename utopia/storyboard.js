import * as React from 'react'
import { Storyboard, RemixScene } from 'utopia-api'

export var storyboard = (
  <Storyboard>
    <RemixScene
      style={{
        position: 'absolute',
        width: 644,
        height: 750,
        left: 200,
        top: 30,
        overflow: 'hidden',
      }}
      data-label='Mood Board'
    />
  </Storyboard>
)
